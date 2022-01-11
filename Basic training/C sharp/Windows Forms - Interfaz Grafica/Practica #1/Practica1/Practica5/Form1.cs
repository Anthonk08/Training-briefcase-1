using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNumero1.Text);
            double num2 = Convert.ToDouble(txtNumero2.Text);
            double resultado = 0.0;

            if (rbSuma.Checked) {
                resultado = num1 + num2;
            }

            if (rbResta.Checked) {
                resultado = num1 - num2;
            }

            if (rbMultiplicar.Checked) {
                resultado = num1 * num2;
            }

            if (rbDividir.Checked) {
                resultado = num1 / num2;
            }

            lblResultado.Text = "El resultado es: " + resultado.ToString();
        }

        private void btnCerrar_Click(object sender, EventArgs e)
        {
            Close();
        }
    }
}
