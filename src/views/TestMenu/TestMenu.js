import React, { Component, lazy, Suspense } from 'react';
import DataTable from 'react-data-table-component';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import axios from 'axios';
// import TestSearch from '../../views/TestMenu2/TestSearch';

const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')

class TestMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 1,

      //Call API
      datachart: [],
      chartData: [],
      labels: [],
      filtered: [],
      modal: false,
      result: [],

      // items: []

    };
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      modal: !this.state.modal
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    //CALL API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const resultApi = res.data;
        this.setState({
          resultApi,
          items:resultApi,
        });
      })
  }


  filterList(e) {
    let updatedList = this.state.resultApi;
    updatedList = updatedList.filter((i) => {
      return i.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({ items: updatedList });
    // console.log(this.state.items);
  }



  mappingdatartest = (index) => {
    //SHOW MODAL
    this.setState({
      modal: true
    })
    const dataId = this.state.datachart[index].id;
    // SENT DATAID TO FUNCTION "getDataById"
    this.getDataById(dataId)
  }

  render() {
    // Card Chart 1
    const cardChartData1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: brandPrimary,
          borderColor: 'rgba(255,255,255,.55)',
          data: [65, 59, 84, 84, 51, 55, 40],
        },
      ],
    };

    const cardChartOpts1 = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent',
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            },

          }],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
              max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
            },
          }],
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      }
    }


    // Card Chart 2
    const cardChartData2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: brandInfo,
          borderColor: 'rgba(255,255,255,.55)',
          data: [1, 18, 9, 17, 34, 22, 11],
        },
      ],
    };

    const cardChartOpts2 = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent',
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            },

          }],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
              max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
            },
          }],
      },
      elements: {
        line: {
          tension: 0.00001,
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    };

    // Card Chart 3
    const cardChartData3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,255,255,.2)',
          borderColor: 'rgba(255,255,255,.55)',
          data: [78, 81, 80, 45, 34, 12, 40],
        },
      ],
    };

    const cardChartOpts3 = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: false,
          }],
        yAxes: [
          {
            display: false,
          }],
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    };


    //MAP DATA MODAL
    // const titleModal = this.state.result.map((item) => { return item.firstName + " " + item.lastName });
    // const emailModal = this.state.result.map((item) => { return item.email });
    // const idModal = this.state.result.map((item) => { return item.id });
    // const usernameModal = this.state.result.map((item) => { return item.firstName });


    const { datachart } = this.state;


    //MAP DATA "Doughnut Chart"
    const labelsDoughnut = datachart.map(p => p.firstName);
    const dataDoughnut = datachart.map(p => p.id);


    //SET VALUE "Doughnut Chart" The value is an array
    const doughnut = {
      labels: labelsDoughnut,
      datasets: [
        {
          data: dataDoughnut,
          backgroundColor: ["#4dbd74", "#f86c6b", "#f8cb00"],
          hoverBackgroundColor: ["#4dbd74", "#f86c6b", "#f8cb00"],
        },
      ],
    };

    // const isLargeNumber = (element) => element.count === 0;

    // console.log(products.findIndex(isLargeNumber));

    const columns = [
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

    const data = this.state.items;

    return (
      <div className="animated fadeIn">
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
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestMenu;
