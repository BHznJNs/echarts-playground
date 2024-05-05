import { useEffect, useRef, useImperativeHandle, Ref, forwardRef } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'
import 'monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js'
import 'monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js'
import 'monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js'
import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js'
import 'monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js'
import debounce from '@mui/material/utils/debounce'

self.MonacoEnvironment = {
  getWorker(_workerId, _label) {
    return new tsWorker()
  }
}

export interface EditorMethods {
  getValue: () => string,
  setValue: (newValue: string) => void,
}

function Editor({onEdited}: {
  onEdited: (...args: any[]) => any,
}, ref: Ref<EditorMethods>) {
  type MonacoEditor = monaco.editor.IStandaloneCodeEditor
  const editorContainer = useRef<HTMLDivElement>(null)
  const editorRef = useRef<MonacoEditor | null>(null)

  useEffect(() => {
    // init editor
    if (editorRef.current !== null || editorContainer.current === null) {
      return
    }
    editorRef.current = monaco.editor.create(editorContainer.current, {
      value: 'option = {\n    \n};',
      language: 'javascript',
      automaticLayout: true,
    })
    editorRef.current.onDidChangeModelContent(debounce(() => {
      const editorValue = editorRef.current?.getValue()
      onEdited(editorValue)
    }, 1000))
  }, [])

  useImperativeHandle(ref, () => ({
    getValue() {
      const editorInst = editorRef.current
      return editorInst === null ? '' : editorInst?.getValue()
    },
    setValue(newValue) {
      editorRef.current?.setValue(newValue)
    }
  }))

  return <div id='editor-container' ref={editorContainer}></div>
}

export default forwardRef(Editor)
