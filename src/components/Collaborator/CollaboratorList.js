import React from 'react'

import CollaboratorCard from './CollaboratorCard'

const CollaboratorList = ({collaborators}) => {

    const renderCollaborators = () => {

        return collaborators.map((collaborator) => (  
            <div className="col-xl-6 col-md-6 pr-xl-15 mb-5">
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