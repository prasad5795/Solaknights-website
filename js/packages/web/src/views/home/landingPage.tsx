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
          <StyledCol span={4}></StyledCol>
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
                    will be Solaknights Generation 0, which are unique
                    characters who come without a weapon - 1 SOLANA. The 2nd
                    planned batch of 10,000 Knights are planned to come equipped
                    from a land far away. These knights comes equipped and have
                    honed their skills at their Barracks from a town far far
                    away. As their master, leader, and comrade, it is up to you
                    to guide these glorious knights. Use them as your disposal,
                    their sole pourpose is to aid you in any way possible. They
                    are capable of being your main character, aiding you in
                    combat, acting as a merchant for discounts on their
                    specialties, and you may also send them on missions to
                    acquire goods for you across the globe!
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
                    Unreal Engine 4/5. The Solana applicated By owning a
                    Solaknight, you are officially partnered with the
                    Solaknights Academy. Welcome aboard and remember, these
                    knights come in different specializations and are armed for
                    your services. Import them as you will, use them to your
                    advantage, and even swap their gear to make a better knight
                    for yourself if you wish to have one extremely powerful one
                    man army.
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
                    Solaknights Academy has acquired many partners along
                    wretched battles to get our knights on the line. We have
                    allied with Dippers who give us the strength of Chris P.
                    Bacon, a one pig farting army who will not only slaughter
                    his opponents through his stench, but through harsh words as
                    well. We have acquired magical allies from Solana Cuties,
                    with their academic trainings in Water-type magic, Solana
                    cuties has now given our knights a chance to acquire a water
                    type magical ally! Leaf, Fire, Holy, and Darkness will be on
                    their way once graduation takes place. From the other side
                    of town we will be acquiring knights from SolSleepyZZZ's
                    Weaponry, who come with a specialized crafted shield with a
                    logo to represent their home.
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
                    <StyledLabelCol span={18}>Rarity</StyledLabelCol>
                  </Row>
                </Title>
                <Row>
                  <Col span={20}>
                    Each Solaknight will come with a rarity type labeled with
                    the knight itself. Certain rarities come with perks. Higher
                    rarity comes with better perks, discounts on items,
                    real-estate, airdrops, weaponry, and much more! The order
                    goes as follows White:Common, Green:Uncommon, Blue:Rare,
                    Red:Super Rare +5% on all goods, Purple:Epic +10% on all goods, Orange:Legendary +20% on all goods,
                    Pink:Artifact +30% on all goods, BabyPink:???. Users with Purple:Epic and
                    above start earning more airdrops, better discounts,
                    pre-sales, etc.
                  </Col>
                </Row>
              </Col>
            </Row>
          </StyledCol>
          <StyledCol span={8}>
            <MeshViewer
              className="move-right modalSize"
              url="https://www.arweave.net/oE4FhiaDFuwmrJFoCmrxFkYCxBPrb5XKY80cUdxN4Pg?ext=glb"
            />
            <MeshViewer
              className="move-right modalSize"
              url="https://www.arweave.net/xZCNDBtspBkFLGEBv2EnRmtOokQV5mHNexBqpok_er8?ext=glb"
            />
          </StyledCol>
          <StyledCol span={4}></StyledCol>
        </Row>
        <br />
        <br />
        <br />
        <Row style={rowStyle} justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
            <Title style={TitleH1Styles}>
              Solaknight Import (Not official)
            </Title>
          </Col>
          <br />
          <Col span={24} style={{ textAlign: 'center' }}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/W4DtREQg8qw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Col>
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
              <Steps direction="vertical" current={3}>
                <Step
                  title="Integration with UE4/5"
                  description="Integrate the Solana CLI / dApp into Unreal Engine 4/5 as a plugin in order to randomize and mint characters based on RNG. Rarity is already incorporated on mint by determining mint time, mint authority, and mint name."
                />
                <Step
                  title="Partnerships and Collaboration"
                  description="Solaknights is partnering with select content creators and other NFT communities. If you wish to do partnerships please message #partnerships via Discord, we are capable of bringing your NFT into our game as a prop, character, equipment, etc. We are officially partnered with Dippers, Solana-Cuties, SolSleepyZZZ, DigitalEyes, MagicEden, Arpwire LLC, PlayToEarnNFT, Asknights, and more! "
                />
                <Step
                  title="Launch Metaplex Store"
                  description="The Launching of Solaknights metaplex store, we have successfully implemented multiple Mint buttons which is now a way to avoid the annoying slow auctions. We will continually update the website for optimization and some design changes as metaplex evolves overtime."
                />
                <Step
                  title="Advertising"
                  description="With the help of our partners, collaborations, and through social media, we will be advertising our mints and focusing more building our community. We are hoping to have over 100,000 discord members by the end of year. Any discord user who invite over 20 people will recieve a free Welcome Warrior NFT!"
                />
                <Step
                  title="Creating our Token"
                  description="We will be creating our own Solaknights token and will announce it to everyone on social media with the address link when this is ready, we will also be incorporating the token to be in our games. This token will be creating with Solana to avoid gas fees / transaction costs."
                />
                <Step
                  title="Game Development Journey"
                  description="Continue building our games which can incorporate NFTs into the game (we will have multiplayer games and singleplayer games). Currently in the works are 2 RPG games, a VR game, and an MMO (long term project)."
                />
                <Step
                  title="To be determined"
                  description="We will be continue expanding this roadmap as we figure out steps "
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
              <Col span={6}></Col>
              <Col span={7}>
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
              <Col span={1}></Col>
              <Col span={7}>
                <Collapse>
                  <Panel header="What is the Minting Process?" key="3">
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      The minting process created randomized characters in
                      Unreal Engine 5. The rarity is determined by RNG. Super Rare Knigt (red) get +5% on all airdrops, pre-sale access to all characters, lands, mounts, weaponry, etc. Epic Knight (purple) earn +10%, Legendary Knight (Orange) earn +20%, Artifact Knight (Pink) earn +30%, and Baby Pink is unknown.
                    </p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <div style={{ width: '100%', height: '40px' }}></div>
          <Col span={24}>
            <Row>
              <Col span={6}></Col>
              <Col span={7}>
                <Collapse>
                  <Panel
                    header="How do I connect my Solaknight to Unreal Engine?"
                    key="3"
                  >
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      When the games release, In order to connect your character
                      to the game click 'Escape' in game to open up the menu, click 'Connect Wallet'
                      and then you can choose which wallet to connect with.
                      Afterwards, you will be able to see your NFT collection
                      and select which NFT to import to the game! Video coming
                      soon. Currently we are doing it from the website but no worries, we will definitely make it easier. We are planning to add a cool animations upon knight introductions (can skip for people with large amounts of knights).
                       
                    </p>
                  </Panel>
                </Collapse>
              </Col>
              <Col span={1}></Col>
              <Col span={7}>
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
              <Col span={2}></Col>
            </Row>
          </Col>
          <div style={{ width: '100%', height: '40px' }}></div>
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
