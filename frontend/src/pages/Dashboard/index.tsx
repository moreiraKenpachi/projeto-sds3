import BarChart from "components/barcharts";
import DataTable from "components/datatable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";
import Navbar from "components/navbar";

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Toda venda</h5>
                        <DonutChart />
                    </div>
                    <div>
                        <h2 className="text-primary">Toda venda</h2>
                    </div>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;