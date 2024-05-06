import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import LineSimpleImage from '../assets/line-simple.webp'
import BarSimpleImage from '../assets/bar-simple.webp'
import ScatterSimpleImage from '../assets/scatter-simple.webp'
import PieDoughnutImage from '../assets/pie-doughnut.webp'
import RadarSampleImage from '../assets/radar.webp'
import LineSimpleDarkImage from '../assets/line-simple-dark.webp'
import BarSimpleDarkImage from '../assets/bar-simple-dark.webp'
import ScatterSimpleDarkImage from '../assets/scatter-simple-dark.webp'
import PieDoughnutDarkImage from '../assets/pie-doughnut-dark.webp'
import RadarSampleDarkImage from '../assets/radar-dark.webp'

export enum ChartType {
  Line,
  Bar,
  Scatter,
  Pie,
  Radar,
}

const presetChartData: [string, ChartType, string, string][] = [
  ['Basic Line Chart'   , ChartType.Line   , LineSimpleImage   , LineSimpleDarkImage],
  ['Basic Bar Chart'    , ChartType.Bar    , BarSimpleImage    , BarSimpleDarkImage],
  ['Basic Scatter Chart', ChartType.Scatter, ScatterSimpleImage, ScatterSimpleDarkImage],
  ['Pie Doughnut Chart' , ChartType.Pie    , PieDoughnutImage  , PieDoughnutDarkImage],
  ['Basic Radar Chart'  , ChartType.Radar  , RadarSampleImage  , RadarSampleDarkImage],
]

interface CardItemProps {
  image: string,
  description: string,
  identifier: ChartType,
  applyCallback: (identifier: ChartType) => void,
}

function CardItem({
  image,
  description,
  identifier,
  applyCallback,
}: CardItemProps) {
  return (
    <Card variant='outlined'>
      <CardMedia
        component='img'
        image={image}
        loading='lazy'
      />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse'}}>
        <Button onClick={() => applyCallback(identifier)}>Apply</Button>
      </CardActions>
    </Card>
  )
}

function Presets({applyPreset, mode}: {
  applyPreset: (i: ChartType) => void,
  mode: string,
}) {
  return (
    <Box sx={{
      height: '100%',
      overflow: 'auto',
    }}>
      <Stack
        spacing={2}
        sx={{padding: '.8rem .8rem 1.6rem'}}
      >
        {presetChartData.map(([
          description, identifier, imageLight, imageDark
        ]: [string, ChartType, string, string], index) => 
          <CardItem
            key={index}
            image={mode === 'light' ? imageLight : imageDark}
            description={description}
            identifier={identifier}
            applyCallback={applyPreset}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Presets
