import { useState } from 'react'
import { Grid, Paper } from "@mui/material"
import Tabs from './Tabs'
import Editor from './Editor'
import Preview from './Preview'

function Subfield({children, ratio}: {
  children: JSX.Element,
  ratio: number,
}) {
  return (
    <Grid
      item
      sx={{
        height: '100%',
        padding: '1rem 1rem 2rem',
      }}
      xs={ratio}
    >
      <Paper
        sx={{ height: '100%' }}
      >{ children }</Paper>
    </Grid>
  )
}

function Main() {
  const [editorContent, setEditorContent] = useState("")

  return (
    <Grid container sx={{ height: '100%', minHeight: 0 }}>
      <Subfield ratio={5}>
        <Tabs children={[
          {name: 'Editor', element: <Editor onEdited={setEditorContent}/>},
          {name: 'Chart Details', element: <div>test content 2</div>},
        ]}/>
      </Subfield>
      <Subfield ratio={7}>
        <Preview chartContent={editorContent}/>
      </Subfield>
    </Grid>
  )
}

export default Main
