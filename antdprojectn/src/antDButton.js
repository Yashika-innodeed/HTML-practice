import React from 'react';
import { Button, Space } from 'antd';
const ButtonJS = () => (
  <Space wrap>
    <Button type="primary"> HELLO </Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed </Button>
    <Button type="text">Text</Button>
    <Button type="link">Link </Button>
  </Space>
);
export default ButtonJS;