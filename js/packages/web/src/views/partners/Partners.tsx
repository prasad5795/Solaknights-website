import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Typography, Card, Image, Button } from 'antd';
import styled from 'styled-components';
import { MintButtonComponent } from './MintButtonComponent';

export const PartnersView = props => {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  const txTimeout = 30000; // milliseconds (confirm this works for your project)

  const treasury1 = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS1!,
  );

  const config1 = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG1!,
  );

  const candyMachineId1 = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID1!,
  );

  const network1 = process.env
    .REACT_APP_SOLANA_NETWORK1 as WalletAdapterNetwork;

  const rpcHost1 = process.env.REACT_APP_SOLANA_RPC_HOST1!;
  const connection1 = new anchor.web3.Connection(rpcHost1);

  const startDateSeed1 = parseInt(process.env.REACT_APP_CANDY_START_DATE1!, 10);

  const mintBtnComponentProps1 = {
    candyMachineId: candyMachineId1,
    config: config1,
    connection: connection1,
    startDate: startDateSeed1,
    treasury: treasury1,
    txTimeout,
  };

  const treasury2 = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS2!,
  );

  const config2 = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG2!,
  );

  const candyMachineId2 = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID2!,
  );

  const network2 = process.env
    .REACT_APP_SOLANA_NETWORK2 as WalletAdapterNetwork;

  const rpcHost2 = process.env.REACT_APP_SOLANA_RPC_HOST2!;
  const connection2 = new anchor.web3.Connection(rpcHost2);

  const startDateSeed2 = parseInt(process.env.REACT_APP_CANDY_START_DATE2!, 10);

  const mintBtnComponentProps2 = {
    candyMachineId: candyMachineId2,
    config: config2,
    connection: connection2,
    startDate: startDateSeed2,
    treasury: treasury2,
    txTimeout,
  };

  return (
    <Layout>
      <Content style={{ padding: 0 }}>
        <StyledCard1>
          <Row
            style={{
              paddingLeft: '7%',
              paddingRight: '7%',
              paddingTop: '5%',
              marginBottom: '2%',
            }}
          >
            <Col span={10} style={{ margin: 'auto' }}>
              <Image
                src="/img/SolSleepyZZZ.png"
                preview={false}
                // height={300}
                // width={550}
                style={{
                  height: '100%',
                  width: '95%',
                }}
              ></Image>
            </Col>
            <Col span={12}>
              <Title style={{ color: 'black' }}>
                Solaknights x SolSleepyZZZ
              </Title>
              <StyledPara>
                Our partnership with SolSleepyZZZ is built off our love for
                games and NFTs! With this partnership you will be able to grab a
                randomized Solaknight AND a Special Shield with the SolSleepyZZZ
                Logo on it. These will be one of a kind and never available
                again, minting will begin soon and will be announced on both
                Solaknights and SolSleepyZZZ's discord! Please note, they have a
                VIP pass going on right now where VIP memebers can get 50% off
                select NFTs such as Solaknights for a limited time. VIP is
                required to get the 'VIP Early Adopter' mints of Solaknights you
                see on the top left of the image.
              </StyledPara>
              <p>
                <a href="https://www.instagram.com/solaknights/">
                  <img
                    src="/svgs/instagram.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
                <a href="https://discord.gg/9mWvxpy5Gq">
                  <img
                    src="/svgs/discord.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
                <a href="https://twitter.com/Solanaknights/">
                  <img
                    src="/svgs/twitter.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
              </p>
            </Col>
          </Row>
          <StyledButton1>Coming Soon</StyledButton1>
        </StyledCard1>
        <StyledCard2>
          <Row
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              marginBottom: '2%',
            }}
          >
            <Col span={12}>
              <Title style={{ color: 'black' }}>Solaknights x Dippers</Title>
              <StyledPara>
                We are proud to announce our very first partnership with our
                good friend Dippers! Dippers is all about Unreal Engine
                Development! We are proud to partner with Dippers and they are
                minting 2 versions of Chris P. Bacon, a protagonist in their
                upcoming game! On the left we have the adult version, where on
                the right we have the childhood version of this beautiful Pig.
                Please note this NFT is obtainable as soon as metaplex
                implements a 'Buy Now' function instead of bidding!
              </StyledPara>
              <p>
                <a href="https://www.instagram.com/solaknights/">
                  <img
                    src="/svgs/instagram.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
                <a href="https://discord.gg/9mWvxpy5Gq">
                  <img
                    src="/svgs/discord.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
                <a href="https://twitter.com/Solanaknights/">
                  <img
                    src="/svgs/twitter.svg"
                    style={{
                      height: '40px',
                      width: '40px',
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                  ></img>
                </a>
              </p>
            </Col>
            <Col span={1}></Col>
            <Col span={11} style={{ display: 'flex' }}>
              <Row style={{ marginRight: '5%' }}>
                <Image
                  src="/img/ChrisPBaconAdult.png"
                  preview={false}
                  // height={300}
                  // width={275}
                  className="responsive-image"
                ></Image>
                <MintButtonComponent
                  {...mintBtnComponentProps1}
                  text="Mint Adult Chris P. Bacon"
                  price="1 SOL"
                />
              </Row>
              <Row>
                <Image
                  src="/img/ChrisPBaconBaby.png"
                  preview={false}
                  // height={300}
                  // width={275}
                  className="responsive-image"
                  style={{ marginBottom: '10px' }}
                ></Image>
                <MintButtonComponent
                  {...mintBtnComponentProps2}
                  text="Mint Baby Chris P. Bacon"
                  price="1 SOL"
                />
              </Row>
            </Col>
          </Row>
          {/* <StyledButton2>Coming Soon</StyledButton2> */}
        </StyledCard2>
      </Content>
    </Layout>
  );
};

const StyledCard1 = styled(Card)`
  & {
    background: linear-gradient(90deg, #aaf3f2 30%, #ead8ee 60%);
    margin: 3%;
    color: black;
    font-size: 18px;
    border-radius: 25px;
  }
`;
// #cc89c7
const StyledCard2 = styled(Card)`
  & {
    background: #cc89c7;
    margin: 3%;
    color: black;
    font-size: 18px;
    border-radius: 25px;
  }
`;

const StyledButton1 = styled(Button)`
  & {
    width: 50%;
    color: #1d1c1c;
    margin-bottom: 20px;
    padding: 20px 10px;
    border-radius: 8px;
    height: 58px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    /* color: #1aabcf; */
    align-items: center;
    /* text-align: right; */
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1aabcf;
    border: 2px solid black;
    margin-left: 25%;
  }
`;

const StyledButton2 = styled(Button)`
  & {
    width: 50%;
    margin-bottom: 20px;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 20px 10px;
    background: #1d1c1c;
    border-radius: 8px;
    height: 58px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    text-align: right;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #cc89c7;
    margin-left: 25%;

    :hover {
      color: #fff;
      background: #1d1c1c;
      border-color: #cc89c7;
    }
  }
`;

const StyledPara = styled.p`
  & {
    color: black;
    font-size: 1.3em;
  }
`;
