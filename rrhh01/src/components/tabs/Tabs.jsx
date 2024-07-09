
export const Tabs = ({ create_tab }) => {
	
	return (
		<>
			<div className="x_content">

				<ul className="nav nav-tabs bar_tabs" id={create_tab.name} role="tablist">

				{create_tab.list_tabs.map((tab, index) => (
					<li className="nav-item" key={index}>
						<a className={`nav-link ${tab.active ? 'active' : ''}`} id={tab.name} data-toggle="tab" href={`#content_${tab.name}`} role="tab" aria-controls={`#content_${tab.name}`} aria-selected={tab.active}>{tab.label}</a>
					</li>
				))}

				</ul>


				<div className="tab-content" id={`content-${create_tab.name}`} >

					{create_tab.list_tabs.map((tab, index) => (
						<div className={`tab-pane fade ${tab.active ? 'show active' : ''}`} id={`content_${tab.name}`} role="tabpanel" aria-labelledby={tab.name} key={index}>
							{tab.content}
						</div>
					))}

				</div>
			</div>
		</>
	)
}
