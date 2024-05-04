import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution"
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
import "monaco-editor/esm/vs/language/typescript/monaco.contribution"
import 'monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js'
import 'monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js'
import 'monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js'
import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js'
import 'monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js'
import { debounce } from '@mui/material'

self.MonacoEnvironment = {
  getWorker(_workerId, _label) {
    return new tsWorker()
  }
}

function Editor({onEdited}: {onEdited: (...args: any[]) => any}) {
  let editorInst: monaco.editor.IStandaloneCodeEditor | null = null
  let isEditorMounted: boolean = false
  const editorContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // init editor
    if (isEditorMounted || editorContainer.current === null) {
      return
    }
    editorInst = monaco.editor.create(editorContainer.current, {
      value: 'option = {\n    \n};',
      language: 'javascript',
      automaticLayout: true,
    })
    editorInst.onDidChangeModelContent(debounce(() => {
      const editorValue = editorInst?.getValue()
      onEdited(editorValue)
    }, 1000))
    isEditorMounted = true
  }, [])

  return <div id='editor-container' ref={editorContainer}></div>
}

export default Editor
