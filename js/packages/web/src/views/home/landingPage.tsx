import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Steps, Collapse, Typography, Divider, Tag } from 'antd';
import styled from 'styled-components';
import { MeshViewer } from '../../components/MeshViewer';

export const LandingPage = () => {
  const { Header, Content, Footer } = Layout;
  const { Step } = Steps;
  const { Panel } = Collapse;
  const { Title } = Typography;
  const colors = [
    {
      backgroundColorCode: '#a1a0a2',
      textColorCode: '#fff',
      label: 'White: 30%',
    },
    {
      backgroundColorCode: '#69a230',
      textColorCode: '#fff',
      label: 'Green: 25%',
    },
    {
      backgroundColorCode: '#273ba2',
      textColorCode: '#fff',
      label: 'Blue: 20%',
    },
    {
      backgroundColorCode: '#a22035',
      textColorCode: '#fff',
      label: 'Red: 12.5%',
    },
    {
      backgroundColorCode: '#6034a2',
      textColorCode: '#fff',
      label: 'Purple: 8.5%',
    },
    {
      backgroundColorCode: '#a27412',
      textColorCode: '#fff',
      label: 'Orange: 3%',
    },
    {
      backgroundColorCode: '#a20096',
      textColorCode: '#fff',
      label: 'Pink: 0.98%',
    },
    {
      backgroundColorCode: '#cd8bc4',
      textColorCode: '#fff',
      label: 'Baby Pink: 0.02%',
    },
  ];
  return (
    <Layout>
      <Content>
        <Row justify="center">
          <StyledCol span={5}></StyledCol>
          <StyledCol span={8}>
            <Row>
              <Col span={24}>
                <Title>
                  <Row>
                    <Col span={3}>
                      <img src="/svgs/characters.svg"></img>
                    </Col>
                    <StyledLabelCol span={18}>Characters</StyledLabelCol>
                  </Row>
                </Title>
                <Row>
                  <Col span={20}>
                    There will be a total of 20,000 characters minted. 10,000
                    will be Solaknights 2d with colored backgrounds that are
                    determined by rarity, and the other 10,000 will be
                    Solaknights 3D, which all come with an animation such as our
                    Solaknight Welcome Warrior (Available when Metaplex's Buy
                    Now capability is released! ). We are going to do
                    environment / accessories as well.
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider plain></Divider>
            <Row>
              <Col span={24}>
                <Title>
                  <Row>
                    <Col span={3}>
                      <img src="/svgs/game-development.svg"></img>
                    </Col>
                    <StyledLabelCol span={18}>Game Development</StyledLabelCol>
                  </Row>
                </Title>
                <Row>
                  <Col span={20}>
                    Here at Solaknights, we have integrated our characters with
                    Unreal Engine 4/5. By owning a 3D version of the NFT, you
                    will be able to connect your wallet so you can use the skin,
                    animations as emote, and all the gear with it in our
                    upcoming games! Solaknights is based on the Solana
                    blockchain using Unreal Engine technology to connect them
                    together.
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider plain></Divider>
            <Row>
              <Col span={24}>
                <Title>
                  <Row>
                    <Col span={3}>
                      <img src="/svgs/partners.svg"></img>
                    </Col>
                    <StyledLabelCol span={18}>Partners</StyledLabelCol>
                  </Row>
                </Title>
                <Row>
                  <Col span={20}>
                    Solaknights is partnering with anyone who is interested
                    right now! Feel free to contact via Discord, Instagram, or
                    Twitter! We love working side by side with content creators
                    to grow together as a community.
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider plain></Divider>
            <Row>
              <Col span={24}>
                <Title>
                  <Row>
                    <Col span={3}>
                      <img src="/svgs/rarity.svg"></img>
                    </Col>
                    <StyledLabelCol span={18}>rarity</StyledLabelCol>
                  </Row>
                </Title>
                <Row>
                  <Col span={20}>
                    Each Solaknight character is randomly generated daily on
                    Unreal Engine until we hit 10,000 of each 2d and 3d
                    versions. See below for the rarity chart! Pricing of
                    rarities are programmed to go up on a fibonacci scale.
                    Partnered creations are not included in the 20,000 mints as
                    well as rarity for Solaknights, they work as a separate
                    entity.
                  </Col>
                </Row>
              </Col>
            </Row>
          </StyledCol>
          <StyledCol span={7}>
            <MeshViewer
              className="move-right modalSize"
              url="https://www.arweave.net/oE4FhiaDFuwmrJFoCmrxFkYCxBPrb5XKY80cUdxN4Pg?ext=glb"
            />
          </StyledCol>
          <StyledCol span={4}></StyledCol>
        </Row>
        <br />
        <br />
        <br />
        <Row style={rowStyle} justify="center">
          <Title style={TitleH1Styles}>Solaknight Import (Not official)</Title>
          <br />
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/W4DtREQg8qw`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Row>
        <br />
        <br />
        <br />
        <Row style={rowStyle} justify="center">
          <Col span={24}>
            <Row style={rowStyle} justify="center">
              <Title style={TitleH1Styles}>Roadmap</Title>
            </Row>
          </Col>
          <br />
          <Col span={24}>
            <Row style={stepsRowStyle} justify="center">
              <Steps direction="vertical" current={2}>
                <Step
                  title="Integration with UE4/5"
                  description="Integrate Unreal Engine to the Solana network at a dApp in order to randomize and mint characters based on Purity/Luck"
                />
                <Step
                  title="Partnerships and Collaboration"
                  description="Solaknights is partnering with any content creators and other NFT creators in general to grow as a community"
                />
                <Step
                  title="Launch Metaplex Store"
                  description="The Launching of Solaknights metaplex store, candy machine is in progress, and looking into other collaborations such as Solanart, Holaplex, DigitalEyes and more. We are also having our upcoming Partners launch with Dippers and SolSleepyzzz as well as a few others"
                />
                <Step
                  title="Advertising"
                  description="With the help of our partners, collaborations, and through social media, we will be advertising our mints and focusing more building our minting application to make sure there are no errors"
                />
                <Step
                  title="Creating our Token"
                  description="We will be creating our own Solaknights token and will announce it to everyone on social media with the address link when this is ready, we will also be incorporating the token to be in our games"
                />
                <Step
                  title="Game Development Journey"
                  description="Continue building our RPG game which can incorporate NFTs into the game (we will have multiplayer games and singleplayer games)"
                />
                <Step
                  title="To be determined"
                  description="We will be continue expanding this roadmap as we figure out steps (Eventually it will have to be its own page)"
                />
              </Steps>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row style={rowStyle} justify="center">
          <Col span={24}>
            <Row style={rowStyle} justify="center">
              <Title style={TitleH1Styles}>Frequently Asked Questions</Title>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={7}></Col>
              <Col span={4}>
                <Collapse>
                  <Panel header="What's The Rarity System?" key="3">
                    {colors.map(color => {
                      return (
                        <>
                          <Row>
                            <StyledTag color={color.backgroundColorCode}>
                              {color.label}
                            </StyledTag>
                          </Row>
                        </>
                      );
                    })}
                  </Panel>
                </Collapse>
              </Col>
              <Col span={3}></Col>
              <Col span={4}>
                <Collapse>
                  <Panel header="What is the Minting Process?" key="3">
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      The minting process created randomized characters in
                      Unreal Engine 5. The rarity is determined by Purity
                      (matching gear) and Luck. For example, a full Knight with
                      perfectly matching gear would be Pink, but there's still a
                      0.02% chance to become baby pink with some luck. A random
                      set of characters are uploaded randomly throughout the
                      day, for now we can only allow a 'Bid' type of payment
                      since metaplex hasn't released a 'Buy now for set price'
                      option.
                    </p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
          <div
            style={{ width: '100%', height: '40px' }}
          ></div>
          <Col span={24}>
            <Row>
              <Col span={7}></Col>
              <Col span={4}>
                <Collapse>
                  <Panel
                    header="How do I connect my Solaknight to Unreal Engine?"
                    key="3"
                  >
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      When the games release, In order to connect your character
                      to the game (only works with the 3D versions of
                      characters) click 'Escape' in game, click 'Connect Wallet'
                      and then you can choose which wallet to connect with.
                      Afterwards, you will be able to see your NFT collection
                      and select which NFT to import to the game! Video coming
                      soon.
                    </p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={3}></Col>
              <Col span={4}>
                <Collapse>
                  <Panel header="What is metaplex?" key="3">
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      <a href="https://www.metaplex.com/">Metaplex</a> is a
                      decentralized protocol that allows creators to mint and
                      auction non-fungible tokens on the Solana blockchain. The
                      metadata of Metaplex NFTs is based on the ERC-721 standard
                      and stored on-chain, while the binary data of the artwork
                      itself is permanently stored on{' '}
                      <a href="https://www.arweave.org/">
                        decentralized storage
                      </a>
                      . You are able to trade Solaknights as regular SPL tokens,
                      view them in wallets or sell and auction them on all
                      public Metaplex marketplaces.
                    </p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
          <div
            style={{ width: '100%', height: '40px' }}
          ></div>
        </Row>
      </Content>
    </Layout>
  );
};

const rowStyle = {
  paddingLeft: '5%',
  paddingRight: '5%',
};

const stepsRowStyle = {
  paddingLeft: '25%',
  paddingRight: '25%',
};

const leftColStyle = {
  // display: 'flex',
  border: '1px solid white',
};

const rightColStyle = {
  // display: 'flex',
  border: '1px solid white',
};

const StyledCol = styled(Col)`
  & {
    // border: 1px solid white;
  }
`;

const TitleH1Styles = {
  color: '#3b90fc',
};

const StyledLabelCol = styled(Col)`
  display: flex;
  color: #3b90fc;
  align-items: end;
  font-weight: 500;
  font-size: 18px;
`;

const StyledTitle = styled(Typography.Title)`
  & {
    scolor: #00fcb0;
  }
`;

const StyledTag = styled(Tag)`
  & {
    margin: 0.5em 0;
    width: 100%;
  }
`;
