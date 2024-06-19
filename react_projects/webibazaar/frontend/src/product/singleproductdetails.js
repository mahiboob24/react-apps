import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function ControlledTabsExample() {
  return (
    <div className=''>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="DESCRIPTION">
          <div className='conatiner'>
            <div className='card-body'>
              <ol className='mb-3'>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ol>

              <div>
                In cursus faucibus tortor eu vestibulum.
                Ut eget turpis ac justo porta varius.
                Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus.
                Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus.
                Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus.
                Nulla risus massa, commodo in imperdiet ut, ornare in leo.
                Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.
              </div>
            </div>
          </div>


        </Tab>
        <Tab eventKey="profile" title="ADDITIONAL INFORMATION">

          <div className='conatiner mb-4'>
            ADDITIONAL INFORMATION
            <div className='row'>
              <div className='col'>

                <div className='card border-0'>
                  <div className='card-body'>
                    <table className="table border">

                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </Tab>
        <Tab eventKey="longer-tab" title="REVIEWS">
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='card-body'>
                  <div>
                    Tab content for Loooonger Tab
                  </div>
                  <div>
                    Tab content for Loooonger Tab
                  </div>
                  <div>
                    Tab content for Loooonger Tab
                  </div>
                  <div>
                    Tab content for Loooonger Tab
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Tab>

      </Tabs>
    </div>
  );
}

export default ControlledTabsExample;