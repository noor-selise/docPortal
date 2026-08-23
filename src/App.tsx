import React, { useState } from 'react'
import UploadDocument from './components/UploadDocument'
import DocumentList from './components/DocumentList'
import ApprovalFlow from './components/ApprovalFlow'
import type { DocumentItem, Role } from './types'

const initialDocs: DocumentItem[] = []

const App = () => {
  const [docs, setDocs] = useState<DocumentItem[]>(initialDocs)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [currentUser] = useState('alice@example.com')
  const [currentRole, setCurrentRole] = useState<Role>('Submitter')

  const handleCreate = (d: DocumentItem) => {
    setDocs((s) => [d, ...s])
  }

  const handleSelect = (id: string) => setSelectedId(id)

  const handleAction = (action: string, actor: string, role: Role) => {
    setDocs((list) =>
      list.map((doc) => {
        if (doc.id !== selectedId) return doc
        const next = { ...doc }
        next.auditTrail = [...next.auditTrail, { actor, role, action, at: new Date().toISOString() }]
        if (action === 'submit') next.status = 'Submitted'
        if (action === 'hold') next.status = 'Held'
        if (action === 'approve') next.status = 'Approved'
        if (action === 'reject') next.status = 'Rejected'
        return next
      })
    )
  }

  const selected = docs.find((d) => d.id === selectedId) || null

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">RegDocPortal (Local)</h1>
        <p className="text-sm text-gray-600">Local prototype implementing the regulated approval workflow</p>
        <div className="mt-3 flex gap-2">
          <label className="text-sm">Role</label>
          <select
            aria-label="Select role"
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value as Role)}
            className="border px-2 py-1 rounded"
          >
            <option>Submitter</option>
            <option>Reviewer</option>
            <option>ComplianceOfficer</option>
            <option>Approver</option>
            <option>Auditor</option>
          </select>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <UploadDocument onCreate={handleCreate} currentUser={currentUser} />
          <div className="p-4 bg-white rounded shadow-sm">
            <div className="font-medium mb-2">Documents</div>
            <DocumentList docs={docs} onSelect={handleSelect} currentRole={currentRole} />
          </div>
        </div>
        <div className="col-span-2">
          {selected ? (
            <ApprovalFlow doc={selected} currentUser={currentUser} currentRole={currentRole} onAction={handleAction} />
          ) : (
            <div className="p-4 bg-white rounded shadow-sm">Select a document to view details</div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
