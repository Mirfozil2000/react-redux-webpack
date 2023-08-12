import React from 'react'
import './Repo.less'
function Repo(props) {
    const repo = props.repo
    return (
        <div className='repo'>
            12313123
            <div className='repo-header'>
            <div className="repo-header-name">{repo.name}</div>
            <div className="repo-header-stars">{repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">{repo.updated_at}</div>
            <a href={repo.html_url} className='repo-link'>Ссылка на репозиторий: {repo.html_url}</a>
        </div>
    )
}

export default Repo