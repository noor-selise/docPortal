import React from 'react'
import type { DocumentItem, Role } from '../types'

type Props = {
  doc: DocumentItem
  currentUser: string
  currentRole: Role
  onAction: (action: string, actor: string, role: Role) => void
}

const ApprovalFlow = ({ doc, currentUser, currentRole, onAction }: Props) => {
  const handleAction = (action: string) => {
    onAction(action, currentUser, currentRole)
  }

  return (
    <div className="p-4 bg-white rounded shadow-sm space-y-3">
      <div className="text-lg font-semibold">{doc.title}</div>
      <div className="text-sm text-gray-600">Status: {doc.status}</div>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={() => handleAction('submit')}>Submit</button>
        <button className="px-3 py-1 bg-yellow-500 text-white rounded" onClick={() => handleAction('hold')}>Hold</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={() => handleAction('reject')}>Reject</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => handleAction('approve')}>Approve</button>
      </div>
      <div className="pt-2">
        <div className="font-medium">Audit trail</div>
        <ul className="text-sm list-disc pl-5">
          {doc.auditTrail.map((a, i) => (
            <li key={i}>{a.at} — {a.actor} ({a.role}) {a.action}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ApprovalFlow
