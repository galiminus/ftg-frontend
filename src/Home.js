import React, { Component } from 'react';
import { Box, Heading, TextInput } from 'grommet';
import { Query } from 'urql';

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
          {process.env.REACT_APP_SITE_NAME}
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
          <Query query="{ groups { telegramId name } }">
            {
              ({ fetching, data }) => {
                if (fetching || !data) {
                  return (null);
                }
                return (
                  <Box
                    animation="slideUp"
                    gap="large"
                    pad="large"
                  >
                    {
                      data.groups.map((group) => (
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
                )
              }
            }
          </Query>
        </Box>
      </Box>
    );
  }
}

export default Home;
