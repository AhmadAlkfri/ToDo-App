type tabProps = {
    todos: {input: string, complete: boolean}[]
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export function Tabs(props: tabProps){
    const { todos, activeTab, setActiveTab } = props
    const tabs = ['All', 'Open', 'Completed'] 
    const tabCount = [todos.length, todos.filter(val => !val.complete).length, todos.filter(val => val.complete).length]
    return (
        <nav className='tab-container'>
            {tabs.map((tab, tabIndex) => {
                return (
                    <button 
                    onClick={() => {setActiveTab(tab)}}
                    className={'tab-button' + (tab === activeTab ? 'tab-selected': '')} 
                    key={tabIndex}
                    >
                        <h4>{tab} <span>({tabCount[tabIndex]})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}