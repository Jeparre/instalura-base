import React from 'react';
import Image from 'next/image';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import { Button } from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />
      <Grid.Container
        marginTop={{ xs: '32px', md: '75px' }}
      >
        <Grid.Row>
          <Grid.Column
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: 'center', md: 'left', }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{ xs: 'center', md: 'left', }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{ xs: 'auto', md: 'initial', }}
              display="block"
            >
              Cadastrar
            </Button>
          </Grid.Column>
          <Grid.Column value={{ xs: 12, md: 6 }}>
            <Image src="/images/phones.png" alt="phones" width="386" height="575" />
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
