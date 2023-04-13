import React from 'react'
import JobApplieComponent2 from '../components/JobApplieComponent2';

function ApplieToJobPage() {
  return (
    <div className="flex flex-col">
      <div>
        <JobApplieComponent2
          type="developpement d'application"
          montant={600}
          certification="laravel"
          title="maquette de contenu"
          description="This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall."
          delay="3994848"
        />
      </div>
    </div>
  );
}

export default ApplieToJobPage
