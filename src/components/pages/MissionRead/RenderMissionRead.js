import React from 'react';
import Pdf from '@mikecousins/react-pdf';

const RenderMissionRead = props => {
  const {
    story,
    page,
    setPage,
    readingDone,
    checkProgress,
    missionComplete,
  } = props;

  return (
    <div className="pdf-container">
      {story && (
        <Pdf file={story} page={page}>
          {({ pdfDocument, canvas }) => (
            <>
              {!pdfDocument && <span>Loading...</span>}
              {canvas}
              {Boolean(pdfDocument && pdfDocument.numPages) && (
                <>
                  <button
                    className="prev-page-btn"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    {'<'}
                  </button>

                  <button
                    className="next-page-btn"
                    disabled={page === pdfDocument.numPages}
                    onClick={e => checkProgress(e, page, pdfDocument.numPages)}
                  >
                    {'>'}
                  </button>
                </>
              )}
            </>
          )}
        </Pdf>
      )}
      {readingDone && (
        <button className="reading-done-btn" onClick={missionComplete}>
          Back to Mission
        </button>
      )}
    </div>
  );
};

export default RenderMissionRead;
