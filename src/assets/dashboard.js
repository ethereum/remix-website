import weeklyMainnetTransact from './dashboard/weekly_mainnet_transact.png'

import weeklyOPDeploy_10 from './dashboard/deploy_contract_to_10.png'
import weeklyOPDeploy_34443 from './dashboard/deploy_contract_to_34443.png'
import weeklyOPDeploy_42220 from './dashboard/deploy_contract_to_42220.png'
import weeklyOPDeploy_7777777 from './dashboard/deploy_contract_to_7777777.png'
import weeklyOPDeploy_8453 from './dashboard/deploy_contract_to_8453.png'

const data = {
    "mainnet": {
        "metrics": [
            {
                "title": "dashboard.metrics.transactions_interact",
                "image": weeklyMainnetTransact // matomo: transact
            }
        ]
    },
    "optimism": {
        "metrics": [
            {
                "title": "dashboard.metrics.deploy_contract_to",
                "network": "Optimism Mainnet",
                "image": weeklyOPDeploy_10 // matomo: deployContractTo
            },
            {
                "title": "Base",
                "network": "Base",
                "image": weeklyOPDeploy_8453 // matomo: deployContractTo
            },
            {
                "title": "Mode",
                "network": "Mode",
                "image": weeklyOPDeploy_34443 // matomo: deployContractTo
            },
            {
                "title": "Celo",
                "network": "Celo",
                "image": weeklyOPDeploy_42220 // matomo: deployContractTo
            },
            {
                "title": "Zora",
                "network": "Zora",
                "image": weeklyOPDeploy_7777777 // matomo: deployContractTo
            }            
        ]
    }
}

export default data