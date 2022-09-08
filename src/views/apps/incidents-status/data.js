import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
export const columns = [
    {
      name: 'Comment',
      minWidth: '250px',
      sortable: row => row.comment,
      selector: row => row.comment
    },
    {
      name: 'Incident ID',
      sortable: true,
      minWidth: '250px',
      selector: row => row.incidentID
    },
    {
      name: 'Created Date',
      sortable: true,
      minWidth: '150px',
      selector: row => row.dateCreated
    },
  
    {
      name: 'incidents',
      sortable: true,
      minWidth: '150px',
      selector: row => row.incidents
    },
    {
      name: 'Created By',
      sortable: true,
      minWidth: '100px',
      selector: row => row.createdBy
    },
    {
      name: 'Modified By',
      minWidth: '150px',
      sortable: row => row.modifiedBy,
      cell: row => {
        return (
          <Badge color={'light-primary'} pill>
            {row.modifiedBy}
          </Badge>
        )
      }
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: () => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pe-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>Details</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Archive size={15} />
                  <span className='align-middle ms-50'>Archive</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Trash size={15} />
                  <span className='align-middle ms-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Edit size={15} />
          </div>
        )
      }
    }
  ]