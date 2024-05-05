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

export enum ChartType {
  Line,
  Bar,
  Scatter,
  Pie,
  Radar,
}

const presetChartData: [string, ChartType, string][] = [
  ['Basic Line Chart'   , ChartType.Line   , LineSimpleImage],
  ['Basic Bar Chart'    , ChartType.Bar    , BarSimpleImage],
  ['Basic Scatter Chart', ChartType.Scatter, ScatterSimpleImage],
  ['Pie Doughnut Chart' , ChartType.Pie    , PieDoughnutImage],
  ['Basic Radar Chart'  , ChartType.Radar  , RadarSampleImage],
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

function Presets({applyPreset}: {
  applyPreset: (i: ChartType) => void
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
          description, identifier, image
        ]: [string, ChartType, string], index) => 
          <CardItem
            key={index}
            image={image}
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
