import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
// bg-white rounded-4 border border-mercury shadow-9
const CreateCompany = () => {
  return (
    <>
      <PageWrapper>
          <br></br>
        <div className="bg-default min-h-100vh flex-all-center pt-lg-15 pt-xxl-17 pt-27 pb-lg-0 pb-18">
        <div className="col-xl-5 col-lg-11 mb-8 px-xxl-15 px-xl-0">
       
        <div className="container">
            <div className="row">
              <h1>Crear compañia </h1>
              <br/>
            </div>

            <div className="row">
              <form novalidate>
                <div>
                  <label for="companyName" class="form-label">
                    Nombre de la comañia
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="companyName"
                  ></input>
                  <br></br>
                </div>

                <div>
                  <label for="companyDescription" class="form-label">
                    Descripcion de la compañia
                  </label>
                  <textarea
                    class="form-control"
                    id="companyDescription"
                    rows="3"
                  ></textarea>
                  <br></br>
                </div>

                <div>
                  <label for="companyWeb" class="form-label">
                    Link de sitio web
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="companyWeb"
                  ></input>
                  <br></br>
                </div>

                <div>
                  <label for="companyImg" class="form-label">
                    Logo de empresa
                  </label>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="companyImg"
                      aria-describedby="inputGroupFileAddon01"
                    ></input>
                    <label class="custom-file-label" for="inputGroupFile01">
                      Selecciona imagen
                    </label>
                  </div>
                  <br></br><br></br>
                </div>

                <button type="submit" class="btn btn-primary">
                  Crear compañia
                </button>
                <br></br><br></br>
              </form>
            </div>
          </div> </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default CreateCompany;
