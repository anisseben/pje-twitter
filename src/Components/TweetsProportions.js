import ReactApexChart from 'react-apexcharts'

function TweetsProportions(props) {
  
    const {score ,positive_tweets, negative_tweets, neutral_tweets} = props.stats

    const options1 = {
        series : [{
            data : [positive_tweets, negative_tweets, neutral_tweets]
        }],
        chart: {
            type: 'bar',
            height: 100,
            width: 110
        },
        plotOptions: {
            bar: {
            borderRadius: 4,
            horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Positives','Negatives', 'Neutrals']
        }
    }

    const options2 = {
        series : [positive_tweets, negative_tweets, neutral_tweets],
        labels:['Positives','Negatives', 'Neutrals'],
        chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 90
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }

    const scoreOptions = {
        series: [score],
        chart: {
            height: 100,
            width: 100,
            type: 'radialBar',
            toolbar: {
            show: true
            },
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Score'],
    }

    const style = {
      backgroundColor : "white",
      borderRadius : '5px',
      border : 'solid 1px #A9A9A9',
      margin: '5px',
      width: "350px"
    }
    return (
      <div className="TweetsProportions-container" >
        <div className="tweetsProportions">
          <ReactApexChart style = {style} options={options1} series={options1.series} type="bar" />
          <ReactApexChart style = {style} options={options2} series={options2.series} type="donut" />
        </div >
        <div className="score">
          <ReactApexChart options={scoreOptions} series={scoreOptions.series} type="radialBar" />
        </div>
      </div>
    );
  }
  
  export default TweetsProportions;