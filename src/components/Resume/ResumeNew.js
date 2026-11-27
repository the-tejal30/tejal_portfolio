import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Tejal_Wani_Frontend_Developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          {!loaded && (
            <div className="resume-loader">
              <div className="resume-loader-spinner" />
              <p>Loading resume...</p>
            </div>
          )}
          <Document
            file={pdf}
            className={loaded ? "d-flex justify-content-center" : "d-flex justify-content-center resume-doc-hidden"}
            loading={null}
            onLoadError={() => setLoaded(true)}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              loading={null}
              onRenderSuccess={() => setLoaded(true)}
              onRenderError={() => setLoaded(true)}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
