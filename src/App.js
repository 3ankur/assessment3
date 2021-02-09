import logo from './logo.svg';
import './App.css';
import CardComponent from './card-component';
import CustomButton from './button';

function App() {

  return (
    <div className="myapp">
      <div className="container">
        <header></header>
        <div className="header__div"></div>
        <div className="">
          <div class="header__message"> <span className="header__text">Message Center</span>
            <button className="requestbtn">Create New Request</button></div>
        
        </div>

        <div className="wrapper">
          <div className="wrapper__tabs">
            <ul>
              <li className="active">Banking</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="wrapper_content">
            <div className="left__part">
              <div className="upper">

              <div className="d-flex" style={{flexDirection: 'column'}}>
<CustomButton name={"Primary CTA"} />
<CustomButton name={"Primary CTA"} newStyle={{padding:"10px 20px" }} icon={{class:'fa fa-plus',style:{height:'20px',width:'20px',padding:'0px 5px'}}}/>

<CustomButton  size={'small'} name={"Primary CTA"}/>
<CustomButton size={'small'} name={"Primary CTA"}  icon={{class:'fa fa-plus',style:{height:'16px',width:'16px',padding:'0px 5px'}}}/>

<CustomButton  
type={'secondary'}  
name={"Secondary CTA (S)"}  
// newStyle={{background:"#4D6474" }} 
/>

<CustomButton  
type={'tertiary'}  
name={"Tertiary CTA (D)"}  
// newStyle={{background:"#4D6474" }} 
/>




</div> 

              </div>
              <div className="buttom"></div>

            </div>
            <div className="right__part">
              <CardComponent
                cardText="Cancel / recall payment, GBP 1,000.00"
                cardLabel="1234567890123456 (GB), KUIML Business Company"
                listInfo={[{ name: "Request reference", label: "SET29383ABCH", id: 1 },
                { name: "Category", label: "Payment", id: 2 },
                { name: "Request status", label: "Pending authrization", id: 3, icon: 'fa fa-info-circle request_icon' }

                ]}
                iconList={
                  [
                    {
                      iconClass: 'fa fa-file-pdf-o',
                      titile: 'Download',
                      id: 1
                    },
                    {
                      iconClass: 'fa fa-print',
                      titile: 'print',
                      id: 2
                    }
                  ]
                }

                buttonList={
                  [
                    {
                      id: 1,
                      name: "Reject",
                      titile: "Reject it",
                      customClassName: "reject"
                    },
                    {
                      id: 2,
                      name: "Authrozie",
                      titile: "Authrozie it",
                      customClassName: "auth"
                    }
                  ]
                }

                linkDetail={
                  {
                    url: 'https://www.hsbc.co.uk',
                    title: 'Full Details'
                  }
                }

                topTextStyle={
                  {
                    topLabel: {
                      fontWeight: 700,
                      fontSize: "15px"
                    },
                    bottomLabel: {
                      fontSize: "11px",
                      fontWeight: 500

                    }
                  }
                }

              />

            </div>

            <div>
            <div className="right__part">
              <CardComponent
                cardText="Cancel / recall payment, GBP 1,000.00"
                cardLabel="1234567890123456 (GB), KUIML Business Company"
                listInfo={[{ name: "Request reference", label: "SET29383ABCH", id: 1 },
                { name: "Category", label: "Payment", id: 2 },
                { name: "Request status", label: "Pending authrization", id: 3, icon: 'fa fa-info-circle request_icon' }

                ]}
                iconList={
                  [
                    {
                      iconClass: 'fa fa-file-pdf-o',
                      titile: 'Download',
                      id: 1
                    },
                    {
                      iconClass: 'fa fa-print',
                      titile: 'print',
                      id: 2
                    }
                  ]
                }

                buttonList={
                  [
                    {
                      id: 1,
                      name: "Reject",
                      titile: "Reject it",
                      customClassName: "reject"
                    },
                    {
                      id: 2,
                      name: "Authrozie",
                      titile: "Authrozie it",
                      customClassName: "auth"
                    }
                  ]
                }

                linkDetail={
                  {
                    url: 'https://www.hsbc.co.uk',
                    title: 'Full Details'
                  }
                }

                topTextStyle={
                  {
                    topLabel: {
                      fontWeight: 700,
                      fontSize: "15px"
                    },
                    bottomLabel: {
                      fontSize: "11px",
                      fontWeight: 500
                    }
                  }
                }

                otherPrivateActions={true}

              />

            </div>
            </div>

            <div>
            <div className="right__part">
              <CardComponent
                cardText="Cancel / recall payment, GBP 1,000.00"
                cardLabel="1234567890123456 (GB), KUIML Business Company"
                listInfo={[{ name: "Request reference", label: "SET29383ABCH", id: 1 },
                { name: "Category", label: "Payment", id: 2 },
                { name: "Request status", label: "Pending authrization", id: 3, icon: 'fa fa-info-circle request_icon' }

                ]}
                iconList={
                  [
                    {
                      iconClass: 'fa fa-file-pdf-o',
                      titile: 'Download',
                      id: 1
                    },
                    {
                      iconClass: 'fa fa-print',
                      titile: 'print',
                      id: 2
                    }
                  ]
                }

                buttonList={
                  [
                    {
                      id: 1,
                      name: "Reject",
                      titile: "Reject it",
                      customClassName: "reject"
                    },
                    {
                      id: 2,
                      name: "Authrozie",
                      titile: "Authrozie it",
                      customClassName: "auth"
                    }
                  ]
                }

                linkDetail={
                  {
                    url: 'https://www.hsbc.co.uk',
                    title: 'Full Details'
                  }
                }

                topTextStyle={
                  {
                    topLabel: {
                      fontWeight: 700,
                      fontSize: "15px"
                    },
                    bottomLabel: {
                      fontSize: "11px",
                      fontWeight: 500
                    }
                  }
                }

                showAttachmentPanel={true}

              />

            </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
