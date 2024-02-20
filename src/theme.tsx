import { extendTheme } from '@mui/joy/styles';
import '@fontsource/inter';

export default extendTheme({
    fontFamily: {
        display: "'Inter', var(--joy-fontFamily-fallback)",
        body: "'Inter', var(--joy-fontFamily-fallback)",
    },
});
