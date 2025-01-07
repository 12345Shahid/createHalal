//components/tools/blog/output-actions.tsx

import { Button } from "@/components/ui/button"
import { Copy, Save, Edit } from 'lucide-react'

interface OutputActionsProps {
  onCopy: () => void
  onSave: () => void
  onEdit: () => void
}

export function OutputActions({ onCopy, onSave, onEdit }: OutputActionsProps) {
  return (
    <div className="flex space-x-2 mt-4">
      <Button variant="outline" size="sm" onClick={onCopy}>
        <Copy className="w-4 h-4 mr-2" />
        Copy
      </Button>
      <Button variant="outline" size="sm" onClick={onSave}>
        <Save className="w-4 h-4 mr-2" />
        Save
      </Button>
      <Button variant="outline" size="sm" onClick={onEdit}>
        <Edit className="w-4 h-4 mr-2" />
        Edit
      </Button>
    </div>
  )
}

