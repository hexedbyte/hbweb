import { ButtonGroup, IconButton } from "@mui/joy"
import ReactCountryFlag from "react-country-flag"
import { _ } from "../Localization";

interface iProps {
    country: string;
    language: string;
}

const Language = (props: iProps) => {

    function handleLanguage(l: string) {
        _.setLanguage(l);
    }

    return (
        <IconButton onClick={() => { handleLanguage(props.language) }}>
            <ReactCountryFlag
                countryCode={props.country}
                svg
                cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
                cdnSuffix='svg'
                title={props.country}
                style={{
                    width: '20px',
                    height: '20px',
                }}
            />
        </IconButton>
    )
}

const LanguageGroup = () => {
    return (
        <ButtonGroup variant='soft' size='sm'>
            <Language country='US' language='en' />
            <Language country='DE' language='de' />
            <Language country='TR' language='tr' />
            <Language country='IT' language='it' />
            <Language country='GR' language='gr' />
        </ButtonGroup>
    )
}

export default LanguageGroup;