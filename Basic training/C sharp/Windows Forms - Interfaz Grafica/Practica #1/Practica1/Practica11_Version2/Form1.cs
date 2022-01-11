using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Practica11_Version2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void multiplicarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNum1.Text);
            double num2 = Convert.ToDouble(txtNum2.Text);
            double resultado = 0.0;

            resultado = num1 * num2;
            lblResultado.Text = "El resultado de la multiplicacion es: " + resultado.ToString();
        }

        private void salirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void sumaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNum1.Text);
            double num2 = Convert.ToDouble(txtNum2.Text);
            double resultado = 0.0;

            resultado = num1 + num2;
            lblResultado.Text = "El resultado de la suma es: " + resultado.ToString();

        }

        private void acercaDeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Ejemplo para menu, no hay mas que decir");
        }

        private void restaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNum1.Text);
            double num2 = Convert.ToDouble(txtNum2.Text);
            double resultado = 0.0;

            resultado = num1 - num2;
            lblResultado.Text = "El resultado de la resta es: " + resultado.ToString();
            
        }

        private void divisionToolStripMenuItem_Click(object sender, EventArgs e)
        {
            double num1 = Convert.ToDouble(txtNum1.Text);
            double num2 = Convert.ToDouble(txtNum2.Text);
            double resultado = 0.0;

            resultado = num1 / num2;
            lblResultado.Text = "El resultado de la division es: " + resultado.ToString();
        }
    }
}
