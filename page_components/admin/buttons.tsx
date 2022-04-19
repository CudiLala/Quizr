import { NotePadContext } from "components/app";
import {
  AddIcon,
  DeleteIcon,
  ExitIcon,
  PublishIcon,
  SaveIcon,
} from "components/icons";
import { TripleSquareLoader } from "components/loaders";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import btnStyles from "styles/components/buttons.module.css";
import { postFetcher } from "utils/fetchers";

export const CreateQuizButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const addNote = useContext(NotePadContext);

  async function createQuiz(ev?: any) {
    ev.preventDefault();

    setLoading(true);
    const res = await postFetcher("/api/quiz/draft/create", {});
    setLoading(false);

    if (!res)
      return addNote({
        type: "error",
        msg: "it seems there is a connection error",
        id: "button_5324",
      });

    const { success, data, error } = res;

    if (!success)
      return addNote({
        type: "error",
        msg: error.message,
        id: "button_5424",
      });

    addNote({
      type: "info",
      msg: "Quiz Created",
      id: "quizcreated324",
    });
    return router.push(`/admin/drafts/editor?id=${data._id}`);
  }

  if (loading)
    return (
      <button
        className={`${btnStyles.BtnPrimary} ${btnStyles.BtnIcon} ${btnStyles.BtnLoading}`}
      >
        <span className={`${btnStyles.Icon}`}>
          <AddIcon />
        </span>
        Creating <TripleSquareLoader />
      </button>
    );
  return (
    <button
      className={`${btnStyles.BtnPrimary} ${btnStyles.BtnIcon}`}
      onClick={createQuiz}
    >
      <span className={`${btnStyles.Icon}`}>
        <AddIcon />
      </span>
      Create quiz
    </button>
  );
};

export const ExitButton: React.FC = () => {
  return (
    <button className={`${btnStyles.BtnIcon} ${btnStyles.BtnTertiaryX}`}>
      <span className={btnStyles.Icon}>
        <ExitIcon />
      </span>
      Exit
    </button>
  );
};

export const SaveButton: React.FC = () => {
  return (
    <button className={`${btnStyles.BtnIcon} ${btnStyles.BtnSecondaryX}`}>
      <span className={btnStyles.Icon}>
        <SaveIcon />
      </span>
      Save
    </button>
  );
};

export const DeleteButton: React.FC = () => {
  return (
    <button className={`${btnStyles.BtnIcon} ${btnStyles.BtnTertiaryX}`}>
      <span className={btnStyles.Icon}>
        <DeleteIcon />
      </span>
      Delete
    </button>
  );
};

export const PublishButton: React.FC = () => {
  return (
    <button className={`${btnStyles.BtnIcon} ${btnStyles.BtnSecondaryX}`}>
      <span className={btnStyles.Icon}>
        <PublishIcon />
      </span>
      Publish
    </button>
  );
};
