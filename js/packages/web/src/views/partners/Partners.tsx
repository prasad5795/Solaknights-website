import * as anchor from '@project-serum/anchor';
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import {
  Row,
  Col,
  Steps,
  Collapse,
  Typography,
  Divider,
  Tag,
  Card,
  Image,
  Button,
} from 'antd';
import styled from 'styled-components';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { useConnection } from '@oyster/common';

import Countdown from 'react-countdown';
import {
  Button as MaterialUiButton,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from './candy-machine';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

interface AlertState {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

export const PartnersView = props => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  // const connection = useConnection();
  console.log(
    ' process.env.REACT_APP_CANDY_MACHINE_ID',
    process.env.REACT_APP_CANDY_MACHINE_ID,
  );
  const [candyMachineId, setCandyMachineId] = useState(
    new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!),
  );

  const [treasury, setTreasury] = useState(
    new anchor.web3.PublicKey(process.env.REACT_APP_TREASURY_ADDRESS!),
  );

  const [config, setConfig] = useState(
    new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_CONFIG!),
  );

  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  const [connection, setConection] = useState(
    new anchor.web3.Connection(rpcHost),
  );

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(
    new Date(props.startDate || 1631840400),
  );
  console.log('startDate', startDate);

  const wallet = useWallet();
  console.log('wallet', wallet);

  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury,
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          connection,
          'singleGossip',
          false,
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        console.log('first useeffect');
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }
      console.log('second useeffect');

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(anchorWallet, candyMachineId, connection);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, candyMachineId, connection]);

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
      <Content>
        <StyledCard1>
          <Row
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              marginBottom: '2%',
            }}
          >
            <Col span={12}>
              <Image
                src="/img/SolSleepyZZZ.png"
                preview={false}
                height={300}
                width={550}
              ></Image>
            </Col>
            <Col span={12}>
              <Title style={{ color: 'black' }}>
                Solaknights x SolSleepyZZZ
              </Title>
              Our partnership with SolSleepyZZZ is built off our love for games
              and NFTs! With this partnership you will be able to grab a
              randomized Solaknight AND a Special Shield with the SolSleepyZZZ
              Logo on it. These will be one of a kind and never available again,
              minting will begin soon and will be announced on both Solaknights
              and SolSleepyZZZ's discord! Please note, they have a VIP pass
              going on right now where VIP memebers can get 50% off select NFTs
              such as Solaknights for a limited time. VIP is required to get the
              'VIP Early Adopter' mints of Solaknights you see on the top left
              of the image.
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
              We are proud to announce our very first partnership with our good
              friend Dippers! Dippers is all about Unreal Engine Development! We
              are proud to partner with Dippers and they are minting 2 versions
              of Chris P. Bacon, a protagonist in their upcoming game! On the
              left we have the adult version, where on the right we have the
              childhood version of this beautiful Pig. Please note this NFT is
              obtainable as soon as metaplex implements a 'Buy Now' function
              instead of bidding!
            </Col>
            <Col span={1}></Col>
            <Col span={11} style={{ display: 'flex' }}>
              <Image
                src="/img/ChrisPBaconAdult.png"
                preview={false}
                // height={300}
                // width={275}
                className="responsive-image"
              ></Image>
              <Image
                src="/img/ChrisPBaconBaby.png"
                preview={false}
                // height={300}
                // width={275}
                className="responsive-image"
              ></Image>
            </Col>
          </Row>

          {wallet.connected && (
            <p>Address: {shortenAddress(wallet.publicKey?.toBase58())}</p>
          )}

          {wallet.connected && (
            <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
          )}

          {wallet.connected && (
            <MintButton
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
              variant="contained"
            >
              {isSoldOut ? (
                'SOLD OUT'
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                ) : (
                  'MINT'
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </MintButton>
          )}

          <StyledButton2>Coming Soon</StyledButton2>
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
    width: 100%;
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

const MintButton = styled(MaterialUiButton)``; // add your styles here

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

const CounterText = styled.span``; // add your styles here
