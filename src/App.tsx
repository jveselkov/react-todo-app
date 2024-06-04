import { Row, Col } from "antd";

import { Todos } from "./widgets";

function App() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
        <Todos />
      </Col>
    </Row>
  );
}

export default App;
