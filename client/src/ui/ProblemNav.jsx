import React, { useEffect } from "react";
import styles from "../styles/ProblemNav.module.css";
import { LANGUAGE_VERSION, languagetoIdMap } from "../utils/languagesConstants";
import { Link } from "react-router-dom";

import axios from "axios";

const languages = Object.entries(LANGUAGE_VERSION);

const ProblemNav = ({
  language,
  onSelectLanguage,
  value,
  setIsExecuted,
  setTheme,
  setIsSubmitting,
  setHasSubmitted,
  isMobile,
  isEditor,
  setIsEditor,
  isSubmissionPage,
  customInput,
  setYourOutput,
  setIsSuccess
}) => {
  const handleRunCode = async() => {
    try {
      const languagecode=languagetoIdMap[language];
    const response= await axios.post(`/api/v1/problem/customTestCase`,{ languagecode, value,customInput })
    
      setYourOutput(response.data.response.output);
      setIsSuccess(!response.data.response.isError)
      
    } catch (error) {
      console.log(error);
      setIsSuccess(false)
      setYourOutput("");
    } finally{
      setIsExecuted(true);
    }
    
  };
  const handleSubmitCode = () => {
    try {
      setIsSubmitting(true);
      setIsEditor(false);
      setHasSubmitted("pending");
      setTimeout(() => {
        setHasSubmitted("accepted");
      }, 1000);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <Link className={styles.linkStyle} to="/problems/20">
          <span onClick={() => setIsEditor(false)}>Statement</span>
        </Link>
        <Link className={styles.linkStyle} to="/problems/20/submissions">
          <span onClick={() => setIsEditor(false)}>Submissions</span>
        </Link>
        {isMobile && isSubmissionPage === false ? (
          <Link className={styles.linkStyle} to="/problems/20">
            <span onClick={() => setIsEditor(true)}>Editor</span>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className={styles.rightNav}>
        {!isMobile || isEditor ? (
          <>
            <div className={styles.editorSelections}>
              <div className={styles.Select}>
                <label htmlFor="language">Language:</label>
                <select
                  name="language"
                  id="language"
                  onChange={(e) => onSelectLanguage(e.target.value)}
                >
                  {languages.map(([language, version]) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.codeButtons}>
              <div className={styles.codeButton} onClick={handleRunCode}>
                Run Code
              </div>
              <div className={styles.codeButton} onClick={handleSubmitCode}>
                Submit Code
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProblemNav;
