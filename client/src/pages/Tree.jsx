import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../css/tree.css'; // Import the CSS file

function Tree() {
  const [orgChart, setOrgChart] = useState([]);

  useEffect(() => {
    const fetchOrgChart = async () => {
      try {
        const res = await axios.get('http://localhost:8800/employee');
        const dataFromDB = res.data;

        const orgData = buildTree(dataFromDB);
        setOrgChart(orgData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrgChart();
  }, []);

  // Recursive function to build the tree structure
  function buildTree(data, parentID = null) {
    const tree = [];

    for (const item of data) {
      if (item.parentID === parentID) {
        const children = buildTree(data, item.id);
        if (children.length) {
          item.children = JSON.parse(JSON.stringify(children));
        }
        tree.push(item);
      }
    }

    return tree;
  }

  function generateHTML(orgData) {
    let html = '<ul>';
    for (const item of orgData) {
      html += `<li><a href="#"><img src="http://localhost:8800/${item.image}" style="width: 35px; height: 35px;"><p><span class="name">${item.emp_name}</span><br><span class="position">${item.emp_position}</span></p></a>`;
      if (item.children && item.children.length) {
        html += generateHTML(item.children);
      }
      html += '</li>';
    }
    html += '</ul>';
    return html;
  }
  

  useEffect(() => {
    const orgChartElement = document.getElementById('orgChart');
    orgChartElement.innerHTML = generateHTML(orgChart);
  }, [orgChart]);

  return (
    <div>
      <Link to="/employee">Edit</Link>
      <div className="tree">
        <div id="orgChart"></div>
      </div>
    </div>
  );
}

export default Tree;
