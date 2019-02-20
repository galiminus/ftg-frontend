import React, { Component } from 'react';
import { Box, Heading, TextInput, Grid } from 'grommet';

const groups = [
  { name: "LOL1" },
  { name: "LOL2" },
  { name: "LOL3" },
  { name: "LOL4" },
  { name: "LOL5" },
  { name: "LOL6" },
  { name: "LOL7" },
  { name: "LOL8" },
  { name: "LOL9" },
  { name: "LOL1" },
  { name: "LOL2" },
  { name: "LOL3" },
  { name: "LOL4" },
  { name: "LOL5" },
  { name: "LOL6" },
  { name: "LOL7" },
  { name: "LOL8" },
  { name: "LOL9" },
  { name: "LOL1" },
  { name: "LOL2" },
  { name: "LOL3" },
  { name: "LOL4" },
  { name: "LOL5" },
  { name: "LOL6" },
  { name: "LOL7" },
  { name: "LOL8" },
  { name: "LOL9" },
  { name: "LOL1" },
  { name: "LOL2" },
  { name: "LOL3" },
  { name: "LOL4" },
  { name: "LOL5" },
  { name: "LOL6" },
  { name: "LOL7" },
  { name: "LOL8" },
  { name: "LOL9" },
];

class Home extends Component {
  render() {
    return (
      <Box
        direction="column"
        pad="xlarge"
        alignContent="around"
      >
        <Heading
          alignSelf="center"
          color="brand"
        >
          {process.env.SITE_NAME}
        </Heading>
        <Box
          style={{
            width: '100%',
            maxWidth: 920,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Box
            animation="fadeIn"
            align="center"
            pad="large"
          >
            <TextInput
              placeholder="Search..."
              size="xlarge"
            >
            </TextInput>
          </Box>
          <Box
            animation="slideUp"
            gap="large"
            pad="large"
          >
              {
                groups.map((group) => (
                  <Box
                    key={group.name}
                    border="bottom"
                  >
                    <Heading
                      level={5}
                    >
                      {group.name}
                    </Heading>
                  </Box>
                ))
              }
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Home;
