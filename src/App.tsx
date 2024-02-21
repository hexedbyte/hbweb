import theme from './theme';
import { Box, CssBaseline, CssVarsProvider, Grid, Link, Stack, Typography } from '@mui/joy';
import { Badger, CardBadger } from './components/Badge';
import WorkExp from './components/WorkExp';
import References from './components/References';
import Education from './components/Education';
import Languages from './components/Languages';
import Private from './components/Private';
import Portfolio from './components/Portfolio';
import { _ } from './Localization';
import LanguageGroup from './components/Language';
import { useEffect, useState } from 'react';

function App() {
  const [language, setLanguage] = useState<string>("en");

  let lang = _.getInterfaceLanguage().substring(0, 2);
  if (lang != "en" && lang != "de" && lang != "tr" && lang != "it" && lang != "gr") {
    lang = "en";
  }

  function handleLanguage(lang: string) {
    if (lang != "en" && lang != "de" && lang != "tr" && lang != "it" && lang != "gr") {
      lang = "en";
    }
    _.setLanguage(lang);
    setLanguage(lang);
  }

  useEffect(() => {
    _.setLanguage(language);
  }, [language]);

  return (
    <CssVarsProvider disableTransitionOnChange theme={theme} defaultMode='dark'>
      <CssBaseline />

      <Box
        sx={{
          height: '100vh',
          minWidth: '100vh',
          maxWidth: '100vh',
          margin: '40px auto 40px auto',
        }}
      >
        <Stack direction='row' mb={1} justifyContent='space-between' alignItems='flex-start' spacing={4}>
          <Stack direction='row' spacing={2}>
            <Typography level='h4' color='danger' variant='solid'>{_.title1}</Typography>
            <Typography level='h4' color='primary' variant='soft'>{_.title2}</Typography>
          </Stack>
          <LanguageGroup func={handleLanguage} />
        </Stack>
        <Typography level='h1'>MURAT AYDIN</Typography>
        <Stack direction='row' spacing={2} alignItems='center' mt={1} mb={4}>
          <img src='/germany.png' />
          <Typography level='body-sm'>{_.location}</Typography>
          <Link href='mailto:hexedbyte@proton.me' target='_blank'>hexedbyte@proton.me</Link>
        </Stack>

        <Typography level='title-md' color='neutral'>{_.introTitle}</Typography>
        <Typography level='body-md'>{_.intro}</Typography>

        <Typography level='title-sm' mt={3} mb={3} color='neutral' variant='soft' fontWeight='lg'>{_.featured}</Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }} >
          <Grid xs={3}><Badger image='htb-ranking' title={_.htbRank} subtitle={_.htbRanking} details={_.htbRankDetails} /></Grid>
          <Grid xs={3}><CardBadger image='frame-1' title={_.htbTop} subtitle={_.htbGlobal} details={_.htbTopDetail} incardTxtBig='22' incardTxtSmall={_.htbGlobalRankSuffix} /></Grid>
          <Grid xs={3}><Badger image='synack' title={_.synackTitle} subtitle={_.synackSubtitle} details={_.synackDetails} /></Grid>
          <Grid xs={3}><Badger image='dante' title={_.htbDante} subtitle={_.certified} details={_.pentest} /></Grid>

          <Grid xs={3}><Badger image='zeropoint' title={_.zeropointTitle} subtitle={_.certified} details={_.zeropointDetails} /></Grid>
          <Grid xs={3}><Badger image='turkgov' title={_.turkGov} subtitle={_.subcontractor} details={_.turkGovDetails} /></Grid>
          <Grid xs={3}><Badger image='turkpolice' title={_.turkPolice} subtitle={_.subcontractor} /></Grid>
          <Grid xs={3}><Badger image='ozelharekat' title={_.turkOzel} subtitle={_.subcontractor} /></Grid>
        </Grid>

        <Portfolio />
        <WorkExp />
        <References />
        <Education />
        <Languages />
        <Private />

      </Box>
    </CssVarsProvider >

  );
}

export default App;
