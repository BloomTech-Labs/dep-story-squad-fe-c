import React from 'react';
import Pdf from '@mikecousins/react-pdf';

const RenderMissionRead = props => {
  const { story, page, setPage } = props;

  return (
    <div className="pdf-container">
      {story && (
        <Pdf file={story} page={page}>
          {({ pdfDocument, pdfPage, canvas }) => (
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
                    onClick={() => setPage(page + 1)}
                  >
                    {'>'}
                  </button>
                </>
              )}
            </>
          )}
        </Pdf>
      )}
    </div>
  );
};

export default RenderMissionRead;
