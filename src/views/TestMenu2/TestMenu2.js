import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input
} from 'reactstrap';

import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


class TestMenu2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleModal:[]
    };
  }



  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


  componentDidMount() {

    // Data Api
    // axios.get('http://localhost:8102/api/allRecord')
    //   .then(res => {
    //     const resultApi = res.data;
    //     this.setState({
    //       resultApi,
    //       items: resultApi,
    //     });
    //   })


    //Data Test
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const resultApi = res.data;
        console.log(resultApi);
        this.setState({
          resultApi,
          items: resultApi,
        });
      })


    axios.get('http://localhost:8102/api/allIssue')
      .then(res => {
        const resultApiIssue = res.data;
        // console.log(resultApiIssue);
        // console.log(titleModal);
        this.setState({
          resultApiIssue,
        });
      })
  }

  


  filterList(e) {
    let updatedList = this.state.resultApi;
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({ items: updatedList });
    console.log(this.state.items);
  }


  render() {


    /* Colum Data Table For API*/
    // const columns = [
    //   {
    //     name: 'Job ID',
    //     selector: 'job_id',
    //     sortable: true,
    //   },
    //   {
    //     name: 'Name',
    //     selector: 'name',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'ProcessDate',
    //     selector: 'processDate',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'Count Record',
    //     selector: 'countRecord',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'Count Field',
    //     selector: 'countField',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'Month',
    //     selector: 'vmonth_id',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'Date',
    //     selector: 'dateString',
    //     sortable: true,
    //     right: true,
    //   },
    //   {
    //     name: 'Version',
    //     selector: 'version',
    //     sortable: true,
    //     right: true,
    //   },
    // ];

    // const data = this.state.items



    const columns = [
      {
        name: 'User ID',
        selector: 'userId',
        sortable: true,
      },
      {
        name: 'ID',
        selector: 'id',
        sortable: true,
        right: true,
      },
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
        right: true,
      },
    ];
    const data = this.state.items


    // Main Chart

    //Random Numbers
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var elements = 27;
    var data1 = [];
  

    for (var i = 0; i <= elements; i++) {
      data1.push(random(50, 250));
   
    }

    const mainChart = {
      labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data1,
        },
       
      ],
    };

    const mainChartOpts = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          }],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250,
            },
          }],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };



    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Issue of Table
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Information of Table
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Input
                      className="input-search-data-table"
                      name="searchInput"
                      placeholder="Search"
                      onChange={this.filterList.bind(this)}
                      label="Search"
                    />
                  </Col>
                </Row>
                <DataTable
                  noHeader={true}
                  columns={columns}
                  data={data}
                  pagination={true}
                  striped={true}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
}

export default TestMenu2;
