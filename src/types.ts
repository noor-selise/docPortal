export type Role = 'Submitter' | 'Reviewer' | 'ComplianceOfficer' | 'Approver' | 'Auditor'

export type DocumentStatus = 'Draft' | 'Submitted' | 'InReview' | 'Held' | 'Approved' | 'Rejected' | 'Published'

export interface DocumentItem {
  id: string
  title: string
  filename?: string
  content?: string
  status: DocumentStatus
  org: string
  uploadedBy: string
  approvalChain: string[]
  auditTrail: { actor: string; role: Role; action: string; at: string }[]
  complianceFlags?: string[]
}
