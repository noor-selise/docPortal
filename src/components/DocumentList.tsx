import React from 'react'
import type { DocumentItem, Role } from '../types'

type Props = {
  docs: DocumentItem[]
  onSelect: (id: string) => void
  currentRole: Role
}

const DocumentList = ({ docs, onSelect }: Props) => {
  return (
    <div className="space-y-3">
      {docs.map((d) => (
        <div key={d.id} className="p-3 bg-white rounded shadow-sm flex justify-between items-center">
          <div>
            <div className="font-medium">{d.title}</div>
            <div className="text-sm text-gray-500">Status: {d.status}</div>
          </div>
          <div>
            <button className="text-sm text-blue-600" onClick={() => onSelect(d.id)} aria-label={`Open ${d.title}`}>
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DocumentList
