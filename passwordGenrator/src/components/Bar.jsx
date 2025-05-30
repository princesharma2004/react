import { useState, useCallback, useEffect, useRef} from 'react'
import { passwordGenrator, copyToClipboard } from '../functions'

export default function Bar()
{
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const passwordRef = useRef(null)

  const [password, setPassword] = useState('')
  const passwordUpdater = useCallback(passwordGenrator, [length, includeNumbers, includeSymbols, setPassword])
  const copyPassword = useCallback(copyToClipboard, [passwordRef])

  useEffect(() => {passwordUpdater(length, includeNumbers, includeSymbols, setPassword)},
                    [length, includeNumbers, includeSymbols, setPassword])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md bg-white rounded-lg shadow-lg p-8">

        <div>
            <input value={password} readOnly ref={passwordRef} />
            <button onClick={() => copyPassword(passwordRef)} className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-teal-600 active:scale-90 transition-colors">
                Copy
            </button>
        </div>

        <div className="flex flex-col items-start mt-6">
            <label>
                Password Length : {length}
                <input type="range" min={5} max={32} value={length} onChange={(e) => setLength(Number(e.target.value))} className="ml-2 w-30 border rounded"/>
            </label>
            <label>
                <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" />
                Include Numbers
            </label>
            <label>
                <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" />
                Include Symbols
            </label>
        </div>

    </div>
  )
}

