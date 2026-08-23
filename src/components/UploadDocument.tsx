import React, { useState } from 'react'
import type { DocumentItem } from '../types'

type Props = {
  onCreate: (doc: DocumentItem) => void
  currentUser: string
}

const UploadDocument = ({ onCreate, currentUser }: Props) => {
  const [title, setTitle] = useState('')

  const handleCreate = () => {
    if (!title.trim()) return
    const doc: DocumentItem = {
      id: String(Date.now()),
      title,
      status: 'Draft',
      org: 'default',
      uploadedBy: currentUser,
      approvalChain: [],
      auditTrail: [{ actor: currentUser, role: 'Submitter', action: 'created', at: new Date().toISOString() }]
    }
    onCreate(doc)
    setTitle('')
  }

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">Document title</label>
      <input
        aria-label="Document title"
        className="w-full border px-3 py-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
      />
      <div className="mt-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleCreate}>Create</button>
      </div>
    </div>
  )
}

export default UploadDocument
