import React from 'react';
import './App.css';
import Box from '@mui/joy/Box';
import { Avatar, Button, Card, CardContent, CardCover, CssBaseline, CssVarsProvider, Grid, Stack, Typography } from '@mui/joy';
import theme from './theme';
import { _ } from './Localization';

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={theme} defaultMode='dark'>
      <CssBaseline />

      <Box
        sx={{
          height: '100vh',
          minWidth: '100vh',
          maxWidth: '100vh',
          margin: 'auto',
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          sx={{ flexGrow: 1 }}
        >
          <Grid xs={6}>
            <Typography level='h4' color='danger'>{_.title}</Typography>
            <Typography level='h1'>MURAT AYDIN</Typography>
            <Typography level='body-md'>{_.intro}</Typography>
            <Button color='primary'>{_.contact}</Button>
          </Grid>
          <Grid xs={6}>
            <Stack spacing={2}>
              <Stack direction='row' justifyContent='flex-start' alignItems='flex-start' spacing={4}>
                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='center'
                  spacing={2}
                >
                  <img src={'/htb-ranking.png'} width={98} />
                  <Stack>
                    <Typography level='title-sm'>{_.htbRanking}</Typography>
                    <Typography level='title-lg'>{_.htbRank}</Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='center'
                  spacing={2}
                >
                  <Card component='li' sx={{ width: 90, height: 98 }} variant='plain'>
                    <CardCover>
                      <img
                        src='/frame-1.png'
                        loading='lazy'
                        alt=''
                        width={98}
                      />
                    </CardCover>
                    <CardContent sx={{ justifyContent: 'center', textAlign: 'center' }}>
                      <Typography
                        level='h3'
                        fontWeight='lg'
                        color='success'
                      >
                        22<Typography level='body-xs' fontWeight='lg'>{_.htbGlobalRankSuffix}</Typography>
                      </Typography>
                    </CardContent>
                  </Card>
                  <Stack>
                    <Typography level='title-sm'>{_.htbGlobal}</Typography>
                    <Typography level='title-lg'>{_.htbTop}</Typography>
                    <Typography level='body-xs'>{_.htbTopDetail}</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
              >
                <Stack spacing={1} textAlign='center'>
                  <img src={'/dante.png'} width={98} />
                  <Typography level='title-sm' fontWeight='lg'>{_.htbDante}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Typography level='body-md'>{_.rtodesc}</Typography>
        </Grid>
      </Box>
    </CssVarsProvider >

  );
}

export default App;
