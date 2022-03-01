import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Descriptions, Row, Col, Card, Divider, Calendar, List, Avatar, Statistic, Steps, Button, Input, Space, Select } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  StepForwardOutlined,
  ArrowUpOutlined,
  HeartFilled,
  AudioOutlined
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const { Step } = Steps;

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Row>
          <Col span={6}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>For bussines</Menu.Item>
              <Menu.Item>Shops</Menu.Item>
              <Menu.Item>Support</Menu.Item>
            </Menu>
          </Col>
          <Col span={18}>
            <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
              <Menu.Item><HeartFilled /></Menu.Item>
              <Menu.Item>Sign In Sign Up</Menu.Item>
              <Menu.Item><Button type="primary">Place an ad</Button></Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Row gutter={45} align="bottom">
          <Col>
            <img width={120} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Synergy-Logo-Large.png/640px-Synergy-Logo-Large.png'} />
          </Col>
          Cars
          <Col>
            Real Estate
          </Col>
          Work
          <Col>
            Services
          </Col>
        </Row>
        <Input.Group>
          <Row gutter={4}>
            <Col span={6}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={'china'}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                      🇨🇳
                    </span>
                    China (中国)
                  </div>
                </Option>
                <Option value="usa" label="USA">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                      🇺🇸
                    </span>
                    USA (美国)
                  </div>
                </Option>
                <Option value="japan" label="Japan">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Japan">
                      🇯🇵
                    </span>
                    Japan (日本)
                  </div>
                </Option>
                <Option value="korea" label="Korea">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Korea">
                      🇰🇷
                    </span>
                    Korea (韩国)
                  </div>
                </Option>
              </Select>
            </Col>
            <Col>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                onSearch={onSearch}
              />
            </Col>
            <Col span={6}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={'china'}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                      🇨🇳
                    </span>
                    China (中国)
                  </div>
                </Option>
                <Option value="usa" label="USA">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                      🇺🇸
                    </span>
                    USA (美国)
                  </div>
                </Option>
                <Option value="japan" label="Japan">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Japan">
                      🇯🇵
                    </span>
                    Japan (日本)
                  </div>
                </Option>
                <Option value="korea" label="Korea">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Korea">
                      🇰🇷
                    </span>
                    Korea (韩国)
                  </div>
                </Option>
              </Select>
            </Col>
            <Col span={6}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={'china'}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                      🇨🇳
                    </span>
                    China (中国)
                  </div>
                </Option>
                <Option value="usa" label="USA">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                      🇺🇸
                    </span>
                    USA (美国)
                  </div>
                </Option>
                <Option value="japan" label="Japan">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Japan">
                      🇯🇵
                    </span>
                    Japan (日本)
                  </div>
                </Option>
                <Option value="korea" label="Korea">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="Korea">
                      🇰🇷
                    </span>
                    Korea (韩国)
                  </div>
                </Option>
              </Select>
            </Col>
          </Row>
          <div style={{ margin: '55px 0px 0px 0px' }}>
            <Row gutter={16}>
              <Col span={3}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={3}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={3}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={3}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
            </Row>
          </div>
        </Input.Group>
      </Header>
    </Layout >
  );
}


export default App;
