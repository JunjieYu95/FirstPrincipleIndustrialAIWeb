# Case Warehouse Structure

This directory contains individual case studies with enhanced interactive features. Each case study has its own folder with dedicated HTML files for better presentation and interactivity.

## Structure

```
src/case_warehouse/
├── caseRegistry.ts          # Registry mapping case studies to their HTML files
├── case_001_arcelormittal_predictive_maintenance/
│   └── index.html           # Interactive HTML page for ArcelorMittal case
├── case_002_bmw_supply_chain/
│   └── index.html           # Interactive HTML page for BMW case
├── case_003_novartis_quality_control/
│   └── index.html           # Interactive HTML page for Novartis case
├── case_004_shell_energy_trading/
│   └── index.html           # Interactive HTML page for Shell case
└── case_005_john_deere_agriculture/
    └── index.html           # Interactive HTML page for John Deere case
```

## Adding New Case Studies

1. **Create a new folder** with naming convention: `case_XXX_company_name`
2. **Create an `index.html`** file with interactive features
3. **Update `caseRegistry.ts`** to include the new case study
4. **Add any additional assets** (images, data files, etc.) to the case folder

## Interactive Features

Each case study HTML page includes:
- **Interactive dashboards** with real-time data visualization
- **Decision simulators** that demonstrate AI decision-making
- **Network visualizations** using D3.js
- **Interactive charts** using Chart.js
- **Responsive design** with Tailwind CSS

## Benefits of This Structure

- **Modularity**: Each case study is self-contained
- **Interactivity**: Rich HTML pages with JavaScript features
- **Scalability**: Easy to add new case studies
- **Performance**: Individual pages load faster
- **Maintainability**: Clear separation of concerns

## Usage

- Main app displays case study cards
- Click "INTERACTIVE" button to open detailed HTML page
- Click "ANALYZE" button to view case study in main app
- Each HTML page is fully interactive and self-contained 