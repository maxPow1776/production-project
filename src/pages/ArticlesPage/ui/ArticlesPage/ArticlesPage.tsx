import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(classes.articlesPage, {}, [className])}>
      {t('articlesPage')}
    </div>
  );
};

export default memo(ArticlesPage);
