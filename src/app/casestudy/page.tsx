// CaseStudy
import { Suspense } from 'react';
import CaseStudyContent from '../casestudy/CaseStudyContent';

export default function CaseStudy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );}