import React from 'react'

import CollaboratorCard from './CollaboratorCard'

const CollaboratorList = ({collaborators}) => {

    const renderCollaborators = () => {

        return collaborators.map((collaborator) => (  
            <div key={collaborator.id} className="col-xl-4 col-md-4 mb-2">
                <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
            </div>))
    }

    return (
        <div>
            <div className='row'>
                {renderCollaborators()}
            </div>

        </div>
    )
}

export default CollaboratorList;